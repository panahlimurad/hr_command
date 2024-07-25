const colors = [
    '#decafe', 
    '#f5daa4', 
    '#adffba', 
    '#aecefd',  
    "#f5f5f5",
    "#5287d9",
  ];

  export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };