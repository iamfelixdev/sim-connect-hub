
import MainLayout from "@/components/layout/MainLayout";
import RegisterUserForm from "@/components/auth/RegisterUserForm";

const RegisterUser = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Create an Account</h1>
          <RegisterUserForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterUser;
