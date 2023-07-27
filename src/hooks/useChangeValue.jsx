export const useChangeValue = (setName, setTeam) => {
  return (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'Name':
        setName(value);
        break;
      case 'Team':
        setTeam(value);
        break;
      default:
        break;
    }
  };
};
