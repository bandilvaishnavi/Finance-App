import { Form } from "react-router-dom"
import { UserPlusIcon } from "@heroicons/react/16/solid"



const Intro = () => {
  return (
    <div className="intro">
        <div>
            <h1>
                Take Control of <span className="accent">Your Money</span>
            </h1>
            <p>
             Personal budgeting is the secret to financial freedom. Start your journey today!
            </p>
            <Form method="post">
                <input type="text" 
                name="userName" 
                required 
                placeholder="What's Your Name?" 
                aria-label="Your Name" 
                autoComplete="given-name"/>
                <input type="hidden" name="_action" value="newUser"/>
                <button type="submit" className="btn btn--dark">
                    <span>Create Account</span>
                    <UserPlusIcon width={20}/>

                </button>
            </Form>
        </div>
        
    </div>
  )
}
export default Intro