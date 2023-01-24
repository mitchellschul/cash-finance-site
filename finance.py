import numpy as np
import pandas as pd
import openpyxl
import xlsxwriter
import xlrd

# Open file
def open_file():
    wbRD = xlrd.open_workbook('finances.xlsx')
    wbWR = xlsxwriter.Workbook('finances.xlsx')
    

# Save file

# Overview

# Deposit income to split 50/30/20

# Withdraw from (Needs, Wants, Savings)

# Needs breakdown

# Wants breakdown

# Savings breakdown

# Interface














def main():
    open_file()


if __name__ == "__main__":
    main()