import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./styles/App.css";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="Centered-text">
            <Appbar className="App-header" />
          </div>

          <div className="App">
            <div className="Main-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum.
                <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>.
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
                massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Curabitur sodales ligula in libero. Sed dignissim
                lacinia nunc.
              </p>

              <p>
                Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor. Maecenas mattis.
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>.
                Sed convallis tristique sem.
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>.
                Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus,
                iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
                ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque
                volutpat condimentum velit.
              </p>
            </div>
            <Footer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
