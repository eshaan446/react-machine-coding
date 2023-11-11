import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setdata] = useState(50);
  const elements = [];

  for (let i = 0; i < data; i++) {
    elements.push(<div key={i}>{i + 1}</div>);
  }

  useEffect(() => {
    const handleScroll = () => {
      let innerHeight = window.innerHeight; //initial height we see of window
      let scrollHeight = document.documentElement.scrollHeight; //the height of page if its scrolled maximum to the last
      let scrollTop = document.documentElement.scrollTop; //our scroll value if we are scrolling top, it increases as we scroll

      //simple maths, see thapa if not understood, 10 is buffer here
      if (innerHeight + scrollTop + 10 > scrollHeight) {
        setdata(data + 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [data]);

  return (
    <div className="App">
      <main>{elements}</main>
    </div>
  );
}
