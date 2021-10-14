import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Test component <useFetchGifs />", () => {

  test("should get the first state from useState", async() => {
    const category = 'simpsons';
    const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs(category));
    const {data, loading, total} = result.current;
    await waitForNextUpdate();    
    expect(data).toEqual([]);
    expect(loading).toBe(true);
    expect(total).toBe(0)
   });

   test('should return list of images and loading in false', async() => {
    const category = 'simpsons';
    const {result,waitForNextUpdate} = renderHook(()=> useFetchGifs(category));
    await waitForNextUpdate();
    const {data, loading, total} = result.current;
    expect(data.length).toEqual(20);
    expect(loading).toBe(false);
    expect(total).toBeGreaterThanOrEqual(3977);
   })
   
});
