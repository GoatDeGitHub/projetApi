import { Nav } from "./Nav";

export function Header() {
  return (
    <>
      <header>
        <Nav />
        <div className="view intro-2">
          <div className="full-bg-img">
            <div className="mask rgba-purple-light flex-center">
              <div className="container text-center white-text wow fadeInUp">
                <h1 className="display-4" id="ti">Voyager pour moins cher</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
