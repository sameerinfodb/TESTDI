import { Injectable, Inject } from "@angular/core";
import { MAGIC_NUMBER } from "src/main";

@Injectable()
export class TestService {
  constructor(@Inject(MAGIC_NUMBER) private magicNumber) {}
  getMagicNumber() {
    return this.magicNumber;
  }
}
