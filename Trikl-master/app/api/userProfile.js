import client from "./client";

const endPoint = "/userProfile";

const createNewUser = async (values) => {
  console.log("from userProfile: ", values);

  const transformedData = {
    fullName: `${values.first_name} ${values.last_name}`,
    email: values.email,
    userDoB: new Date(values.userDoB)
      .toLocaleDateString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, ""),
    // userDoB: values.userDoB,
    govId: values.govId || "req.body.govId",
    IdType: "req.body.IdType",
    idProof: values.idProof,
    address: values.address,
    addressProof: values.addressProof,
    country: values.country,
    contactNumber: "09897987",
    // contactNumber: values.contactNumber,
    profession: values.profession,
    proofofFunds: values.proofOfFunds,
    linkedCredentials: "req.body.linkedCredentials",
    riskScore: "0",
  };

  console.log("from userProfile TRANSFORMED DATA");
  console.log(transformedData);

  try {
    const result = await client.post("/userProfile/", transformedData);
    console.log("RESULT");
    console.log(result);

    if (result.data.error) {
      throw new Error(result.data.error); // Handle error returned from backend
    }

    return result.data; // Return user data on success
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

export default {
  createNewUser,
};
