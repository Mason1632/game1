import multiprocessing

def worker():
    """worker function"""
    print ('Worker')
    return

if __name__ == '__main__':
    jobs = []
    for i in range(9999999999):
        p = multiprocessing.Process(target=worker)
        jobs.append(p)
        p.start()
