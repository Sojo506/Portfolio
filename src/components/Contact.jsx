import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí podrías añadir la lógica para enviar los datos del formulario
    console.log("Formulario enviado:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border-green-400`}
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border-green-400`}
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border-green-400`}
      />
      <Button type="submit" className={`${isDarkMode ? 'bg-green-400 text-gray-900' : 'bg-green-600 text-white'} hover:bg-opacity-80`}>
        Send_Message.exe
      </Button>
    </form>
  )
}
