# Lista de tarefas (to-do list)
tasks = []

# Função para adicionar uma tarefa à lista
def add_task():
    task = input("Digite a tarefa que deseja adicionar: ")
    tasks.append(task)
    print("Tarefa adicionada com sucesso!")

# Função para listar as tarefas
def list_tasks():
    if not tasks:
        print("Sua lista de tarefas está vazia.")
    else:
        print("Lista de tarefas:")
        for index, task in enumerate(tasks, start=1):
            print(f"{index}. {task}")

# Função para remover uma tarefa da lista
def remove_task():
    list_tasks()
    task_index = int(input("Digite o número da tarefa que deseja remover: ")) - 1
    if 0 <= task_index < len(tasks):
        removed_task = tasks.pop(task_index)
        print(f"A tarefa '{removed_task}' foi removida com sucesso.")
    else:
        print("Número de tarefa inválido.")

# Loop principal do programa
while True:
    print("\nEscolha uma opção:")
    print("1. Adicionar tarefa")
    print("2. Listar tarefas")
    print("3. Remover tarefa")
    print("4. Sair")

    choice = input("Digite o número da opção: ")

    if choice == "1":
        add_task()
    elif choice == "2":
        list_tasks()
    elif choice == "3":
        remove_task()
    elif choice == "4":
        print("Obrigado por usar a lista de tarefas. Até mais!")
        break
    else:
        print("Opção inválida. Tente novamente.")