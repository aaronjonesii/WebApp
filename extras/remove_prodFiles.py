import os


# TODO: FILES to delete


def delete_file(file):
    if os.path.isfile(file):
        try:
            os.remove(file)
            print(f'√ Successfully removed: {file}')
        except Exception as e:
            print(f'[*] Something went wrong attempting to remove the file: {file}\n{e} [*]')
    else:
        print(f'[!] {file} not found')

if __name__ == '__main__':
    dir = '/home/anonsys/public_html/'
    # dir = os.path.dirname(os.path.realpath(__file__))
    files = [
        '3rdpartylicenses.txt',
        'index.html',
        'main.c05a55170ed8d31581af.js',
        'nebular.85e45e2f83750a4184af.eot',
        'nebular.e5b059e952431846f8ab.ttf',
        'nebular.e7b6b47eeafe34432dca.woff',
        'nebular.ee79fa432c91db08585f.svg',
        'polyfills.1377efc7fe2580eb3294.js',
        'runtime.06daa30a2963fa413676.js',
        'styles.708702b85e7c0d73171f.css',
    ]
    for file in files:
        file = os.path.join(dir, file)
        delete_file(file)
