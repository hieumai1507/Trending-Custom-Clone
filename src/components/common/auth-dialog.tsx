"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { COMMON } from "@/constants/textConstant";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  email?: string;
  password?: string;
  firstName?: string;
}

export function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateField = (name: string, value: string) => {
    const newErrors: FormErrors = { ...errors };

    switch (name) {
      case "email":
        if (!value) {
          newErrors.email = "Please enter a valid email address.";
        } else if (!validateEmail(value)) {
          newErrors.email = "Please enter a valid email address.";
        } else {
          delete newErrors.email;
        }
        break;
      case "password":
        if (!value) {
          newErrors.password = "Password can't be blank.";
        } else {
          delete newErrors.password;
        }
        break;
      case "firstName":
        if (!isSignIn && !value) {
          newErrors.firstName = "First name can't be blank.";
        } else {
          delete newErrors.firstName;
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    const fieldsToValidate = isSignIn
      ? ["email", "password"]
      : ["email", "password", "firstName"];

    fieldsToValidate.forEach((field) => {
      const fieldValid = validateField(
        field,
        formData[field as keyof typeof formData]
      );
      if (!fieldValid) isValid = false;
      setTouched((prev) => ({ ...prev, [field]: true }));
    });

    if (isValid) {
      console.log("Form submitted:", formData);
      // Handle form submission
    }
  };

  const getInputClassName = (fieldName: string) => {
    return cn(
      "transition-colors",
      touched[fieldName] &&
        errors[fieldName as keyof FormErrors] && [
          "border-red-500",
          "focus-visible:ring-red-500",
          "bg-red-50",
        ]
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[610px] max-h-[95%] md:max-h-[95%] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <div className="flex items-center justify-between mt-4">
            <DialogTitle className="text-2xl">
              {isSignIn ? "Sign in" : "Create your account"}
            </DialogTitle>
            <Button
              variant="ghost"
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-sm font-normal border-2 border-[#0D0C22] hover:md:border-gray-100 md:mr-4 py-5"
            >
              {isSignIn ? "Sign Up Now" : "Sign In"}
            </Button>
          </div>
          {!isSignIn && (
            <p className="text-sm text-gray-600">{COMMON.EASY_REGISTRATION}</p>
          )}
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">
              {COMMON.EMAIL_ADDRESS}{" "}
              {!isSignIn && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={getInputClassName("email")}
              required
            />
            {touched.email && errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {!isSignIn && (
            <>
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  {COMMON.FIRST_NAME} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getInputClassName("firstName")}
                  required
                />
                {touched.firstName && errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">{COMMON.LAST_NAME}</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">
                {COMMON.PASSWORD}{" "}
                {!isSignIn && <span className="text-red-500">*</span>}
              </Label>
              {isSignIn && (
                <Button
                  variant="link"
                  className="px-0 text-sm text-blue-600"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle forgot password
                  }}
                >
                  {COMMON.FORGOT_PASSWORD}
                </Button>
              )}
            </div>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={getInputClassName("password")}
              required
            />
            {touched.password && errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="showPassword"
              checked={showPassword}
              onCheckedChange={(checked) => setShowPassword(checked as boolean)}
            />
            <Label htmlFor="showPassword" className="text-sm font-normal">
              {COMMON.SHOW_PASSWORD}
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#EE3124] hover:bg-[#d62b1f] py-5"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                {COMMON.OR} {isSignIn ? "login" : "register"} {COMMON.WITH}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              type="button"
              variant="outline"
              className="w-full py-5 font-bold text-[18px]"
              onClick={() => {
                // Handle Google login
              }}
            >
              <img
                src="	https://trendingcustom.com/cdn/shop/t/57/assets/google.svg?v=42231041703542086261684321061
"
                alt="Google"
                className="mr-2 h-8 w-8"
              />
              {COMMON.CONTINUE_WITH_GOOGLE}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full py-5 font-bold text-[18px]"
              onClick={() => {
                // Handle Facebook login
              }}
            >
              <img
                src="https://trendingcustom.com/cdn/shop/t/57/assets/facebook.svg?v=40076760842241353711684321067"
                alt="Facebook"
                className="mr-2 h-8 w-8"
              />
              {COMMON.CONTINUE_WITH_FACEBOOK}
            </Button>
          </div>

          <p className="text-xs text-gray-500">
            By clicking Sign in or Continue with Google, Facebook, you agree to
            Trendingcustom{" "}
            <a href="/terms" className="underline">
              {COMMON.TERM_OF_USE}
            </a>{" "}
            and{" "}
            <a href="/pages/privacy-policy" className="underline">
              {COMMON.PRIVACY_POLICY}
            </a>
            . Trendingcustom may send you communications; you may change your
            preferences in your account settings. We'll never post without your
            permission.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
