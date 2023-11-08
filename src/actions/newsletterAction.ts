import axios from "axios";
import { type ActionFunctionArgs, redirect } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const newsletterAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // console.log(data);

  const { data: respData } = await axios.post(newsletterUrl, data);
  toast.success(respData.msg);

  return redirect("/");
};
