num1 = float(input("escolha um numero "))
num2 = int(input("até que numero vai a tabuada "))

for i in range(num2 + 1):
    resultado = num1*i
    print(f"{num1} X {i} = {resultado}")