
import { CarForm } from "@/components/car-form"
import { UserForm } from "@/components/user-form"



export default function ProfilePage() {

    return (
      <>
       <div className="preview flex min-h-[350px] w-full justify-center p-5 items-center">
            <div className="flex flex-row space-x-4 text-left">           
                <UserForm />
                <CarForm />            
            </div>          
        </div>
      </>

    )
}
