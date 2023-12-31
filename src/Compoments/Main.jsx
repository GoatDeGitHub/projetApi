import { Input } from "../Forms/Input";

export function Main () {

const DoubleInput = () => {
    return <>
    <row>
        <form>
            <div className="row">
                <Input pholder={"Depart"}/>
                <Input pholder={"Destination"}/>
            </div>
        </form>
    </row>
    </>
}

    return <>
    <main className="text-center py-5 vh-100">
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-5">
                    <DoubleInput/>
                </div>
            </div>
        </div>
    </main>
    </>
}