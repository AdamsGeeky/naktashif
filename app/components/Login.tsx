import { useState } from 'react'
import { FiMail } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LoginProps {
  isOpen: boolean
  onClose: () => void
  onLogin: () => void
}

export default function Login({ isOpen, onClose, onLogin }: LoginProps) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('+234')

  const handleLogin = () => {
    // Implement login logic here
    onLogin()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex">
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="+91" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">🇮🇳 +91</SelectItem>
                <SelectItem value="+1">🇺🇸 +1</SelectItem>
                <SelectItem value="+44">🇬🇧 +44</SelectItem>
              </SelectContent>
            </Select>
            <Input 
              className="flex-1 ml-2" 
              placeholder="Phone" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <Button 
            className="w-full bg-red-500 hover:bg-red-600 text-white"
            onClick={handleLogin}
          >
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
