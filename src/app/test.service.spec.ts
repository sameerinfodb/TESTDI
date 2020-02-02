import { TestBed, inject } from "@angular/core/testing";
import { TestService } from "./test.service";
import { MAGIC_NUMBER } from "src/main";

describe("Testing Test Service", () => {
  testService: TestService;
  beforeEach(() => {
    TestBed.configureCompiler({
      providers: [TestService]
    });

    this.testService = TestBed.get(TestService);
  });
  it("Should create TestService", () => {
    expect(this.testService).toBeTruthy();
  });
});
