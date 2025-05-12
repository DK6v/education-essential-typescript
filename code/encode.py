import numpy as np

a = np.array([1, 1, 1, 2, 2, 3, 3, 3, 1, 1, 5, 5, 2, 3, 3])

def encode(a):
    b = np.zeros_like(a)
    c = np.zeros_like(a)
    print (a)
    print (b)
    print (c)

    c[0:-1] = a[1:]
    c[-1] = a[-1]+1
    print ("--")
    print (a)
    print (b)
    print (c)
    print ("--")

    for i in range(np.size(c)):
      if (a[i]!=c[i]):
        b[i] = 1
        print(i)
        print (a)
        print (b)
        print (c)
        print ("--")

    #print (b)
    add = np.nonzero(b)[0] + 1
    result = np.array([a[x] for x in range(len(b)) if b[x]]), np.ediff1d(np.nonzero(b), to_begin=add[0])
    return result

print(a, encode(a))