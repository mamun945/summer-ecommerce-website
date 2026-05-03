
import { CgCheck } from "react-icons/cg";




const SummerScreenCare = () => {
  return (
    <div className="my-7 p-3">
        <h1 className="text-xl font-bold text-center">Summer Screen Care Tips</h1>
        <div className="animate__animated animate__bounce animate__delay-2s main mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">

          <div className="hover:bg-gray-200 hover:shadow-xl border border-orange-500 p-4 rounded-md shadow-md  col-span-4 md:col-span-2 space-y-2 bg-orange-100">
            <h1 className="text-lg font-bold">1. Keep Your Eyes Hydrated 💧</h1>
            <div className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/><p>Drink plenty of water (at least 2–3 liters daily).</p></div>
            <div className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/><p>Use artificial tears (eye drops) if your eyes feel dry.</p></div>
            <div className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/><p>Avoid direct fan or AC airflow on your face.</p></div>
            <div className="flex gap-1"><CgCheck className="text-orange-500 text-lg"/><p>Splashing cool water on your face sometimes helps refresh your eyes.</p></div>
          </div>
           
           <div className="hover:bg-gray-200 hover:shadow-xl border border-orange-500 p-4 rounded-md col-span-2 space-y-2 col-span-4 md:col-span-2 bg-orange-100">
             <h1 className="text-lg font-bold">2. Reduce Screen Time During Peak Heat 🕒</h1>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Avoid heavy screen use between 12 PM/ 3 PM.</p>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Take regular breaks while using screens (follow the 20-20-20 rule).</p>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Too much heat + screen use can cause eye strain and headaches.</p>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Prefer offline activities during peak heat hours.</p>
           </div>

           <div className="hover:bg-gray-200 hover:shadow-xl border border-orange-500 p-4 rounded-md col-span-2 space-y-2 col-span-4 md:col-span-2 bg-orange-100">
            <h1 className="text-lg font-bold">3. Use Anti-Glare & Adjust Brightness Properly 🌈</h1>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Do not keep your screen brightness too high.</p>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Use auto-brightness or adjust based on surroundings.</p>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Use anti-glare screen protectors if possible.</p>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Enable dark mode or reading mode to reduce strain.</p>
           </div>

           <div className="hover:bg-gray-200 hover:shadow-xl border border-orange-500 p-4 rounded-md col-span-2 space-y-2 col-span-4 md:col-span-2 bg-orange-100">
            <h1 className="text-lg font-bold">4. Wear Sunglasses Outdoors 😎</h1>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Use UV-protected sunglasses when going outside.</p>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Avoid looking at your phone under strong sunlight for long time.</p>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Sunglasses reduce glare and eye squinting.</p>
            <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Protects eyes from harmful UV rays.</p>
           </div>

           <div className="hover:bg-gray-200 hover:shadow-xl border border-orange-500 p-4 rounded-md col-span-4 space-y-2 col-span-4 md:col-span-4 bg-orange-100">
          <h1 className="text-lg font-bold">5. Stay in a Cool & Comfortable Environment ❄️</h1>
          <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Avoid using screens in direct sunlight.</p>
          <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Sit in a cool or well-ventilated place.</p>
          <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Keep your screen clean from dust and sweat.</p>
          <p className="flex items-center gap-1"><CgCheck className="text-orange-500 text-lg"/>Avoid touching your eyes with dirty or sweaty hands.</p>
           </div>

        </div>
    </div>
  )
}

export default SummerScreenCare;
