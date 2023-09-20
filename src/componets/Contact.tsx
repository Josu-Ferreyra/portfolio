import { useState, type FormEvent } from "react"

export function Contact() {
  const [alert, setAlert] = useState({visible: false, message: '', error: false})
  const handleContactForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formElement = e.target as HTMLFormElement
    const formData = new FormData(formElement)

    const formDataObject = Object.fromEntries(formData.entries())
    if (!formDataObject.name || !formDataObject.email || !formDataObject.message) {
      setAlert({
        visible: true,
        message: "¡Hey! You must fill every form input. Don't try to cheat 😡",
        error: true
      })
      setTimeout(() => {
        setAlert({visible: false, message: "", error: false})
      }, 3000);
      return
    }

    fetch("https://formspree.io/f/mrgwylde", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setAlert({
          visible: true,
          message: "Message send successfully",
          error: false
        })
        setTimeout(() => {
          setAlert({visible: false, message: "", error: false})
        }, 3000);
    
        formElement.reset()
      } else {
        setAlert({
          visible: true,
          message: "Oops! There was a problem submitting your form",
          error: true
        })
        setTimeout(() => {
          setAlert({visible: false, message: "", error: false})
        }, 3000);
      }
    }).catch(() => {
      setAlert({
        visible: true,
        message: "Oops! There was a problem submitting your form",
        error: true
      })
      setTimeout(() => {
        setAlert({visible: false, message: "", error: false})
      }, 3000);
    });  
  }

  return (
    <section className="snap-start">
      <div className="max-w-4xl m-auto px-3">
        <div className="w-fit">
          <h2 className='text-5xl font-black pt-3 pe-1'>
            Contact
          </h2>
          <div className="h-3 w-full bg-rose-500 -mt-3"></div>
        </div>
        <div>
          <form className="flex flex-col gap-4 mt-6" onSubmit={(e) => handleContactForm(e)}>
            <input className="bg-zinc-950 rounded text-white py-1 px-3" name="name" type="text" placeholder="Name" required />
            <input className="bg-zinc-950 rounded text-white py-1 px-3" name="email" type="email" placeholder="Email" required/>
            <textarea className="bg-zinc-950 rounded text-white py-1 px-3" name="message" placeholder="Message" cols={30} rows={8} required></textarea>
            <p className={`flex justify-center font-semibold items-center ${alert.error ? "bg-red-600" : "bg-green-600"} rounded ${alert.visible ? 'h-20 px-3 opacity-100' : 'h-0 opacity-0 overflow-hidden'} transition-all`}>
              {alert.message}
            </p>
            <button className="bg-rose-700 w-fit m-auto py-2 px-12 rounded" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}