import { Injectable, Inject } from "@angular/core";
import { MAGIC_NUMBER } from "./token";

@Injectable({ providedIn: "root" })
export class TestService {
  constructor(@Inject(MAGIC_NUMBER) private magicNumber) {}
  getMagicNumber() {
    return this.magicNumber;
  }
}
