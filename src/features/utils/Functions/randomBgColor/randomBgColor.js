const colors = [
    '#decafe', 
    '#f5daa4', 
    '#adffba', 
    '#aecefd',  
  ];

  export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };