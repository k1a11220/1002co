// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  date: string;
  type: "breakfast" | "lunch" | "dinner";
  menu: string;
};

type Response = Data[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json([
    {
      date: "2023/06/13",
      type: "breakfast",
      menu: "베이글, 크림치즈, 딸기잼, 두유, 컵과일",
    },
    {
      date: "2020/06/13",
      type: "lunch",
      menu: "베이글, 크림치즈, 딸기잼, 두유, 컵과일",
    },
    {
      date: "2020/06/13",
      type: "dinner",
      menu: "베이글, 크림치즈, 딸기잼, 두유, 컵과일",
    },
    {
      date: "2023/06/14",
      type: "breakfast",
      menu: "베이글, 크림치즈, 딸기잼, 두유, 컵과일",
    },
    {
      date: "2020/06/14",
      type: "lunch",
      menu: "베이글, 크림치즈, 딸기잼, 두유, 컵과일",
    },
    {
      date: "2020/06/14",
      type: "dinner",
      menu: "베이글, 크림치즈, 딸기잼, 두유, 컵과일",
    },
  ]);
}
