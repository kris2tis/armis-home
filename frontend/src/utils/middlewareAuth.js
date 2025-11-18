export async function getUserDetails(req) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/profile`,
    {
      method: "GET",
      headers: {
        Cookie: `accessToken=${accessToken || ""};refreshToken=${
          refreshToken || ""
        }`,
      },
    }
  ).then((data) => data.json());
  
  return {
    isAdmin: data?.data?.user?.role === "ADMIN",
    isAuthenticated: data?.data?.user?._id && true,
  };
}
