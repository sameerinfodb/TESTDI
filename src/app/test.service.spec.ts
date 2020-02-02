import { TestBed, inject } from "@angular/core/testing";
import { TestService } from "./test.service";
import { MAGIC_NUMBER } from "./token";

describe("Testing Test Service", () => {

  let testService: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MAGIC_NUMBER,
          useValue: 7
        },
        TestService
      ]
    });

    testService = TestBed.get(TestService);
  });

  it("Should create TestService", () => {
    expect(testService).toBeTruthy();
  });

});
