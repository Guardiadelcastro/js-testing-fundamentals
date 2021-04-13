async function test(title, cb) {
  try {
    await cb()
    console.log(`✔ ${title}`)
  } catch (error) {
    console.log(`ｘ ${title}`)
    console.log(error)
  }
}
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is less than ${equal}`)
      }
    },
    toBeLessThan(expected) {
      if (actual >= expected) {
        throw new Error(`${actual} is greater than ${equal}`)
      }
    },
  }
}

global.test = test
global.expect = expect
