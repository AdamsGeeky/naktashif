import {  FiMail } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Login() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">Log in</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex">
              <Select defaultValue="+91">
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+234">🇮🇳 +234</SelectItem>
                  <SelectItem value="+1">🇺🇸 +1</SelectItem>
                  <SelectItem value="+44">🇬🇧 +44</SelectItem>
                </SelectContent>
              </Select>
              <Input className="flex-1 ml-2" placeholder="Phone" />
            </div>
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
              Send One Time Password
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <FiMail className="mr-2 h-4 w-4" />
              Continue with Email
            </Button>
            <Button variant="outline" className="w-full">
              <FcGoogle className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          </div>
          <p className="text-center text-sm text-gray-600">
            New to Zomato? <a href="#" className="text-red-500 hover:underline">Create account</a>
          </p>
        </DialogContent>
      </Dialog>
    )
  }