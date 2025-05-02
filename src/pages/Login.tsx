
import MainLayout from "@/components/layout/MainLayout";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Sign In</h1>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
