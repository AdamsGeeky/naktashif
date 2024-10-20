import { FcGoogle } from 'react-icons/fc'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function SignUp() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Sign up</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign up</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input id="fullName" placeholder="Full Name" />
            <Input id="email" placeholder="Email" type="email" />
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to Zomato Terms of Service, Privacy Policy and Content Policies
              </label>
            </div>
            <Button className="w-full">Create account</Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <FcGoogle className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          </div>
          <p className="text-center text-sm text-gray-600">
            Already have an account? <a href="#" className="text-red-500 hover:underline">Log in</a>
          </p>
        </DialogContent>
      </Dialog>
    )
  }