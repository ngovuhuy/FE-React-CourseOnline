import React, { FormEvent, useState } from 'react'
import '../../css/authen.css';
import authenticateService from '../../services/authenticateService';
import { useNavigate, useSearchParams } from 'react-router-dom';
interface PopupLoginProps {
    show: boolean;
    onClose: () => void;
  }
const Login: React.FC<PopupLoginProps> = ({ show, onClose }) => {
  const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(true); // Trạng thái ban đầu là hiển thị login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [role, setRole] = useState("user");
    const [userName, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // Success message state
          // Error state variables

    if (!show) return null; // Nếu không có giá trị `show`, không render gì cả

    const handleRegisterClick = () => {
      setShowLogin(false); // Khi nhấn vào "Đăng ký" sẽ ẩn form login và hiện form đăng ký
    };
  
    const handleCloseClick = () => {
      setShowLogin(true); // Đóng pop-up đăng ký và quay lại login
    };

    const handleSubmit = async (e: FormEvent) => {
       e.preventDefault();
      const result = await authenticateService.loginClient(email, password);
      if (result.success) {
        setSuccessMessage("Login successful! Redirecting...");
        setErrorMessage(""); // Clear any previous error message
        setTimeout(() => {
          onClose(); // Đóng form login
          navigate("/"); // Điều hướng về trang home
          window.location.reload();
          setEmail(""); // Reset email
          setPassword(""); // Reset password
          setSuccessMessage("")
        }, 2000);
      } else {
        setSuccessMessage(""); // Clear any previous success message
        setErrorMessage(result.errorMessage || "Account or password is incorrect.");
      }
    };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]{1,28}@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };
    const handleSubmitRegister = async (e: FormEvent) => {
      e.preventDefault();
      let isValid = true;
      if (!validateEmail(email)) {
        isValid = false;
      }
      if (password !== confirmPassword) {
        setConfirmPasswordError("Nhập lại mật khẩu không đúng!");
        setErrorMessage("");
        isValid = false;
      }
  
      if (!isValid) {
        return;
      }
  
      try {
        await authenticateService.signUpClient({
          email,
          userName,
          password,
          role,
        });
        setSuccessMessage("Đăng ký thành công...");
        setTimeout(() => {
          handleCloseClick();
          setErrorMessage("");
          setSuccessMessage("");
          setEmail("");
          setUserName("")
          setPassword("");
          setConfirmPassword("");
        }, 2000);
      
      } catch (error) {
        setSuccessMessage(""); // Clear any previous success message
        setConfirmPasswordError("");
        setErrorMessage("Email đã có người sử dụng");
      }
    };
  return (
    <div className='pt-16 pb-18 mid-po'>
        {/* Form Đăng Nhập */}
      {showLogin && (
        <div className="border-login">
          <div className="flex justify-end">
            <button className='btn btn-close' onClick={onClose}></button>
          </div>
          <div className="flex justify-center pt-6">
            <img className="w-9" src="/image/logo.png" alt="logo" />
          </div>
          <div className="text-center">
            <h1 className="_heading_m3d3f_12">Đăng nhập vào F8</h1>
            <p className="_warn_m3d3f_20">
              Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung sẽ bị khóa.
            </p>
          </div>
          <div className="_main_1unxg_8">
            <div className="_content_1unxg_12">
              <form onSubmit={handleSubmit}  method="POST">
                <div className="_wrapper_juilt_1">
                  <div className="_wrapper_1fn2z_1">
                    <div className="_labelGroup_1fn2z_10">
                      <label className="_label_1fn2z_10 text-black font-semibold">Tên đăng nhập</label>
                      <label className="_label_1fn2z_10 _right_1fn2z_6">Đăng nhập với số điện thoại</label>
                    </div>
                    <div className="_inputWrap_1fn2z_49 _invalid_1fn2z_64">
                      <input className='w-full input-text' name="email" placeholder="Email hoặc Username" value={email}
                  onChange={(e) => setEmail(e.target.value)}  required/>
                    </div>
                    <div className="_inputWrap_1fn2z_49 _invalid_1fn2z_64 mt-4">
                      <input  type='password' className='w-full input-text' name="password" placeholder="Mật khẩu"  value={password}
                  onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    {errorMessage && <p className="my-2 ml-2" style={{ color: "red" }}>{errorMessage}</p>}
                    {successMessage && <p className="my-2 ml-2" style={{ color: "green" }}>{successMessage}</p>} {/* Display success message */}
                    <div className="_wrapper_juilt_1">
                      <div className="_wrapper_1l2og_1">
                        <input type="checkbox" id="remember" name="remember" className="_input_1l2og_8" />
                        <label className="_label_1l2og_11">
                          <span>Ghi nhớ đăng nhập</span>
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="_wrapper_5cl6z_1 _primary_5cl6z_13 _rounded_5cl6z_19 _disabled_5cl6z_22">Đăng nhập</button>
                    <p className="_registerOrLogin_1unxg_19">Bạn chưa có tài khoản? <span className='cursor-pointer' onClick={handleRegisterClick}>Đăng ký</span> </p>
                    <a className="_forgotPassword_1unxg_31 text-center" href="/forgot-password">Quên mật khẩu?</a>
                    <p className="_wrapper_1qabh_1 text-center">Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với <a href="https://fullstack.edu.vn/terms" target="_blank">điều khoản sử dụng</a> của chúng tôi.</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Form Đăng Ký */}
      {!showLogin && (
          <div className="border-login">
          <div className="flex justify-end">
            <button className='btn btn-close' onClick={onClose}></button>
          </div>
          <div className="flex justify-center pt-6">
            <img className="w-9" src="/image/logo.png" alt="logo" />
          </div>
          <div className="text-center width-register">
            <h1 className="_heading_m3d3f_12">Đăng ký vào F8</h1>
            <p className="_warn_m3d3f_20">
              Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung sẽ bị khóa.
            </p>
          </div>
          <div className="_main_1unxg_8">
            <div className="_content_1unxg_12">
              <form onSubmit={handleSubmitRegister}>
                <div className="_wrapper_juilt_1">
                  <div className="_wrapper_1fn2z_1">
                    <div className="_labelGroup_1fn2z_10">
                      <label className="_label_1fn2z_10 text-black font-semibold">Tên đăng nhập</label>
                    </div>
                    <div className="_inputWrap_1fn2z_49 _invalid_1fn2z_64">
                      <input className='w-full input-text' type='email' name="username" placeholder="Vui lòng nhập email"  value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="_labelGroup_1fn2z_10 pt-3">
                      <label className="_label_1fn2z_10 text-black font-semibold" >Họ và tên</label>
                    </div>
                    <div className="_inputWrap_1fn2z_49 _invalid_1fn2z_64 ">
                      <input required className='w-full input-text' name="password" placeholder="Vui lòng nhập tên"   value={userName}
                onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div hidden className="_inputWrap_1fn2z_49 _invalid_1fn2z_64 ">
                      <input className='w-full input-text' name="role" placeholder="role"  value={role}
                onChange={(e) => setRole(e.target.value)}/>
                    </div>
                    <div className="_labelGroup_1fn2z_10 pt-3">
                      <label className="_label_1fn2z_10 text-black font-semibold">Mật khẩu</label>
                    </div>
                    <div className="_inputWrap_1fn2z_49 _invalid_1fn2z_64 ">
                      <input required type='password' className='w-full input-text' name="password" placeholder="Vui lòng Mật khẩu"    value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="_labelGroup_1fn2z_10 pt-3">
                      <label className="_label_1fn2z_10 text-black font-semibold">Nhập lại mật khẩu</label>
                    </div>
                    <div className="_inputWrap_1fn2z_49 _invalid_1fn2z_64 ">
                      <input required type='password' className='w-full input-text' name="password" placeholder="Vui lòng nhập lại mật khẩu"  value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    {confirmPasswordError && (
                <p className="error-text py-2 ml-2" style={{ color: "red" }}>{confirmPasswordError}</p>
              )}
                {errorMessage && <p className="my-2 ml-2" style={{ color: "red" }}>{errorMessage}</p>}
                {successMessage && <p className="my-2 ml-2" style={{ color: "green" }}>{successMessage}</p>} {/* Display success message */}
                    <button type="submit" className="_wrapper_5cl6z_1 _primary_5cl6z_13 _rounded_5cl6z_19 _disabled_5cl6z_22">Đăng ký</button>
                    <p className="_registerOrLogin_1unxg_19">Bạn chưa có tài khoản? <span className='cursor-pointer' onClick={handleCloseClick}>Đăng nhập</span> </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Login