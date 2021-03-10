import os
import time
import logging
logging.basicConfig(level=logging.INFO)
def main():

    # This will create files named from file1 to file50 in the /apps directory
    for i in range(1,51):
        file_name = os.path.join('./apps','file{}'.format(i))
        with open(file_name,'w+') as f:
            f.write('The file name is {}'.format(file_name))

def pause():
    while True:
        print('Printing fake logs')
        logging.info('Printing fake logs')
        time.sleep(10)

if __name__=='__main__':
    main()
    pause()
