export const generateEmail = (
  firstName: string,
  lastName: string,
  count: number = 0
): string => {
  const lastNameLower = lastName.split(' ').join('').toLowerCase();
  let email = `${firstName[0].toLowerCase()}${lastNameLower}@mail.com`;
  if (count > 0) {
    email = `${firstName[0].toLowerCase()}${lastNameLower}${count}@mail.com`;
  }
  return email;
};
export const validateIdentification = (identification: string): boolean => {
  if (identification.length !== 10 || !/^\d{10}$/.test(identification))
    return false;

  for (let i = 0; i < identification.length - 3; i++) {
    if (
      identification[i] === identification[i + 1] &&
      identification[i] === identification[i + 2] &&
      identification[i] === identification[i + 3]
    ) {
      return false;
    }
  }

  return true;
};

export const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return regex.test(password);
};
