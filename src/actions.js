"use server";

export function submitAction(formData) {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export function submitActionWithCurrentState(currentState, formData) {
  const username = formData.get("username");
  const age = formData.get("age");
  if (
    currentState.users.filter((user) => user.username === username).length === 0
  ) {
    currentState?.users.push();
    return {
      users: [
        ...currentState.users,
        {
          username,
          age,
        },
      ],
      error: null,
    };
  } else {
    return {
      users: currentState.users,
      error: "user already exists",
    };
  }
}

export function submitTitle(formData) {
  return new Promise((resolve, reject) => {
    const updatedTitle = formData.get("title");
    setTimeout(() => {
      const n = Math.random();
      if (n < 0.75) {
        resolve(updatedTitle);
      } else reject("Error");
    }, 5000);
  });
}

export function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      if (n < 0.75) {
        resolve("This is the data");
      } else reject("Error");
    }, 2000);
  });
}
