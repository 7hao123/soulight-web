import { useState } from "react";
import "./MySelect.css";
import { Flex, Input } from "antd";
import { UpOutlined } from "@ant-design/icons";
interface MySelectProps{
  handleSelected:(item:number)=>void;
  country:number;
}

export default function MySelect({handleSelected,country}:MySelectProps) {
  function getImage() {
    const modules = import.meta.glob("../../assets/country/*.png", {
      eager: true,
    });

    const names = Object.values(modules).map((item, index) => {
      const item1 = item.default.slice(20);
      const index1 = item1.indexOf(".");
      const item2 = item1.slice(0, index1);
      const num = index;
      return { src: item.default, country: item2, num: num };
    });

    return names;
  }
  const allCountry = getImage();
  const [category, setCategory] = useState(allCountry);
  console.log(country);
  
  const defaultCountry = allCountry.filter(item =>{
    
    
    return item.num == country
  })
  console.log(defaultCountry);
  
  const [currentNum, setCurrentNum] = useState(defaultCountry[0]?defaultCountry[0]:allCountry[0]);
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const searchContent = e.target.value.toLowerCase();
    const items = allCountry.filter((item) => {
      return item.country.toLowerCase().indexOf(searchContent) >= 0;
    });
    setCategory(items);
  }

  function handleClick(e:React.MouseEvent<HTMLElement>) {
    const str = e.currentTarget.innerText;

    const index = str.indexOf("+");

    const currentCountry = e.currentTarget.innerText.slice(0, index - 1);

    const selectedCountry = allCountry.filter((item) => {
      return item.country.toLowerCase() === currentCountry.toLowerCase();
    });

    setCurrentNum(selectedCountry[0]);
    handleSelected(selectedCountry[0].num)
    setIsDropdownVisible(false)
  }

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);  
  function handleSelectVisible(){
    setIsDropdownVisible(!isDropdownVisible);
  }
  return (
    <>
      <Flex vertical style={{ position: "relative" }}>
        <div className="selected-option" onClick={handleSelectVisible}>
          <img src={currentNum.src} alt="Option 1" />
          <span>+{currentNum.num}</span>
          <UpOutlined style={{ marginRight: "14px" }} />
        </div>
        <div className="dropdown-total" style={{display:isDropdownVisible?'block':'none'}}>
          <div className="dropdown-box">
            <Input type="text" placeholder="Search" onChange={handleSearch} />
            <ul className="dropdown-options">
              {category.map((item) => (
                <li className="dropdown-option" key={item.country + item.num}>
                  <div onClick={handleClick} className="option-item">
                    <div>
                      <img src={item.src} alt="" />
                      <span style={{ marginLeft: "8px" }}>{item.country}</span>
                    </div>

                    <span>+{item.num}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Flex>
    </>
  );
}
