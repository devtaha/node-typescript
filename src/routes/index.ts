import express, { Request, Response, NextFunction, Router } from "express";
const router: Router = express.Router();
import mdw from "../middlewares";
import authorized from "./authorized";

router.use(function(req: Request, res: Response, next: NextFunction) {
  if (req.method == "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});
router.use(mdw.basicAuthentication, authorized);

export = router;
