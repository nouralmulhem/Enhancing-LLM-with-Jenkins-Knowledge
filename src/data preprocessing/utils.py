import matplotlib.pyplot as plt

def plot_histogram(array):
  # Plot the histogram
  plt.hist(array, bins=10, edgecolor='black')
  plt.title('Distribution of Row Lengths')
  plt.xlabel('Row Length')
  plt.ylabel('Frequency')
  plt.show()