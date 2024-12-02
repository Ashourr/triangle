import React, { useState } from "react";
import Draggable from "react-draggable";
// import "./App.css";
import "./text.css"
const Text = () => {
  // المواقع الأصلية والتنسيقات المخصصة لكل عنصر
  const initialData = [
    { x: 0, y: 0, content: "Hello World", rotate: 55, className: "box1" },
    // { x: 200, y: 500, content: "Good Morning", className: "box2" },
    // { x: -100, y: -100, content: "Welcome", rotate: 30, className: "box3" },
    // { x: 200, y: -200, content: "React Rocks", rotate: 45, className: "box4" },
    // { x: -200, y: 200, content: "Have a Nice Day", rotate: 60, className: "box5" },
    // { x: -250, y: 250, content: "Drag Me", rotate: 75, className: "box6" },
    // { x: 215, y: 215, content: "Keep Going", rotate: 90, className: "box7" },
  ];

  // حالة لإدارة المواقع والتنسيقات الحالية لكل عنصر
  const [items, setItems] = useState(initialData);

  // دالة التعامل مع السحب
  const handleDrag = (e, data, index) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], x: data.x, y: data.y };
    setItems(newItems);
  };

  // دالة التعامل مع التوقف عن السحب
  const handleStop = (index) => {
    const newItems = [...items];
    newItems[index] = { ...initialData[index], x: 0, y: 0 }; // إعادة العنصر إلى الموقع الأصلي
    setItems(newItems);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {items.map((item, index) => (
        <Draggable
          key={index}
          position={{ x: item.x, y: item.y }}
          onDrag={(e, data) => handleDrag(e, data, index)}
          onStop={() => handleStop(index)}
        >
          <div
            className={item.className} // تعيين className الخاص بكل عنصر
            style={{
              transform: ` rotate(${item.rotate}deg) !important`, // تطبيق التحولات المدمجة
            }}
          >
            {item.content}
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Text;
