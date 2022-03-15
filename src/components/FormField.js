import React from "react";

export default function FormField({errors, name, children, type, register, validation}) {

    return (
        <div className="form-field">
            <label htmlFor={name}>
                {children}
            </label>
            <input
                type={type}
                {...register(name, validation)}
            />
            {errors[name] && <p className="error-message">{errors[name].message}</p>}
        </div>
    )
}