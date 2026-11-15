export const getHealth = () => {
  return {
    status: "OK",
    timestamp: new Date().toISOString(),
    message: "cartshare backend is running",
  };
}

