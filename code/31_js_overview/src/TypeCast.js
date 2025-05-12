export class TypeCast {
  run() {
    console.log('=== TYPE CAST ===');
    console.log();

    console.log(`-- 100 + "100"       typeof ${typeof(100 + "100")}`);
    console.log(`-- "100" + 100       typeof ${typeof("100" + 100)}`);
    console.log();

    console.log(`-- 100 == "100"      == ${(100 == "100")}`);
    console.log(`-- "100" == 100      == ${(100 == "100")}`);
    console.log();

    console.log(`-- 100 === "100"     == ${(100 === "100")}`);
    console.log(`-- "100" === 100     == ${(100 === "100")}`);
    console.log();

    console.log(`-- null || true      == ${(null || true)}`);
    console.log(`-- undefined || true == ${(undefined || true)}`);
    console.log(`-- false || true     == ${(0 || true)}`);
    console.log(`-- NaN || true       == ${(NaN || true)}`);
    console.log(`-- 0 || true         == ${(0 || true)}`   + "\t<- !!!");
    console.log();

    console.log(`-- null ?? true      == ${(null ?? true)}`);
    console.log(`-- undefined ?? true == ${(undefined ?? true)}`);
    console.log(`-- false ?? true     == ${(false ?? true)}`);
    console.log(`-- NaN ?? true       == ${(NaN ?? true)}` + "\t<- !!!");
    console.log(`-- 0 ?? true         == ${(0 ?? true)}`   + "\t<- !!!");
    console.log(`-- "str" ?? true     == ${("str" ?? true)}`);
    console.log();

    console.log(`-- null + 1          == ${(null + 1)}`);
    console.log(`-- undefined + 1     == ${(undefined + 1)}` + "\t<- !!!");
    console.log(`-- false + 1         == ${(false + 1)}`);
    console.log(`-- true + 1          == ${(true + 1)}`);
    console.log(`-- NaN + 1           == ${(NaN + 1)}` + "\t<- !!!");
    console.log();

    console.log(`-- Number(null)      == ${(Number(null))}`);
    console.log(`-- Number(undefined) == ${(Number(undefined))}`);
    console.log(`-- Number(false)     == ${(Number(false))}`);
    console.log(`-- Number(true)      == ${(Number(true))}`);
    console.log(`-- Number(NaN)       == ${(Number(NaN))}`);
    console.log(`-- Number("str")     == ${(Number("str"))}` + "\t<- !!!");
    console.log(`-- Number("100")     == ${(Number("100"))}`);
    console.log();

    console.log(`-- Boolean(null)      == ${(Boolean(null))}`);
    console.log(`-- Boolean(undefined) == ${(Boolean(undefined))}`);
    console.log(`-- Boolean(false)     == ${(Boolean(false))}`);
    console.log(`-- Boolean(true)      == ${(Boolean(true))}`);
    console.log(`-- Boolean(NaN)       == ${(Boolean(NaN))}`);
    console.log(`-- Boolean("str")     == ${(Boolean("str"))}` + "\t<- !!!");
    console.log(`-- Boolean("100")     == ${(Boolean("100"))}`);
    console.log();

    console.log(`-- String(null)       == ${(String(null))}`);
    console.log(`-- String(undefined)  == ${(String(undefined))}`);
    console.log(`-- String(false)      == ${(String(false))}`);
    console.log(`-- String(true)       == ${(String(true))}`);
    console.log(`-- String(NaN)        == ${(String(NaN))}`);
    console.log(`-- String("str")      == ${(String("str"))}`);
    console.log(`-- String("100")      == ${(String("100"))}`);
    console.log();

  }
}
