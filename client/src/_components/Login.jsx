import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const logininfo = {
            rollno: data.rollno,
            username: data.username,
        };
        try {
            const res = await axios.post(
                "http://localhost:3003",
                logininfo
            );
            console.log(res.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Login</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Welcome back student
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input
                                    name="rollno"
                                    type="number"
                                    placeholder="Enter your roll number"
                                    {...register("rollno", {
                                        required: "Roll number is required",
                                    })}
                                />
                                {errors.rollno && (
                                    <span>{errors.rollno.message}</span>
                                )}
                                <br />
                                <Input
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    {...register("username", {
                                        required: "Username is required",
                                    })}
                                />
                                {errors.username && (
                                    <span>{errors.username.message}</span>
                                )}
                                <br />
                                <Button type="submit">Submit</Button>
                            </form>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default Login;
