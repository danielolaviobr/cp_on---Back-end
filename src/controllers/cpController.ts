import { Request, Response } from "express";
import { getRepository } from "typeorm";
import shortid from "shortid";

import Cp from "../models/CpModel";
import cpView from "../views/cpView";

export default {
  async create(request: Request, response: Response) {
    const cpRepository = getRepository(Cp);

    const { text } = request.body;

    const re = /\r?\n|\r/g;

    const formattedText = text.replace(re, "//line-break");

    const uid = shortid()
      .replace("-", "0")
      .replace("_", "0")
      .replace("/", "0")
      .replace("\\", "0");

    const data = {
      text: formattedText,
      uid,
    };

    console.log(data);

    const cp = cpRepository.create(data);

    await cpRepository.save(cp).catch((err) => console.log(err));

    return response.status(200).json(cpView.render(cp));
  },
  async show(request: Request, response: Response) {
    const cpRepository = getRepository(Cp);

    const { uid } = request.params;

    const cp = await cpRepository.findOneOrFail({ where: [{ uid: uid }] });

    const { id, text } = cp;

    const re = /(\/\/line-break)/g;

    const data = {
      id,
      text: text.replace(re, "\n"),
      uid,
    };

    console.log(data);

    return response.status(200).json(cpView.render(data));
  },
};
