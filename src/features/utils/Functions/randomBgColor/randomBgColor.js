const colors = [
    '#decafe', 
    '#f5daa4', 
    '#adffba', 
    '#aecefd',  
    "#5287d9",
  ];

  export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };