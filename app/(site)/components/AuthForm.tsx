'use client';

import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { 
    FieldValues, 
    SubmitHandler, 
    useForm 
} from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLording, setIsLording] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLording(true);

        if (variant === 'REGISTER') {
            //Axios
        }

        if (variant === 'LOGIN'){
            // NextAuth SignIn
        }

        const socialAction = (action: string) => {

        }
    }
    return (
        <div 
            className="
                bg-white
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
            "
        >
            <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input />
            </form>
        </div>
    )
}

export default AuthForm;