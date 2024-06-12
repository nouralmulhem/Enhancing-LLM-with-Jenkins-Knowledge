import pandas as pd
from datasets import Dataset

def preprocess_data(file_name, questions_col, answers_col, max_sequence_length=11000, num_samples=None):
  """
  Preprocess the data to the desired format
  Args:
    file_name (str): The name of the file to be preprocessed
    questions_col (str): The name of the column containing the questions
    answers_col (str): The name of the column containing the answers
    max_sequence_length (int): The maximum length of the sequence
    num_samples (int): The number of samples to select from the dataset
  Returns:
    dataset: The preprocessed dataset contains the text column
  """ 
  raw_data = pd.read_csv(file_name)

  # Combine columns into the desired format
  df = pd.DataFrame(columns=['text'])

  df['text'] = raw_data.apply(
      lambda row: f"<s>[INST] {row[questions_col].strip()} [/INST] {row[answers_col]} </s>",
      axis=1
  )

  # Calculate the length of each row
  df['row_length'] = df['text'].apply(len)

  # Filter out rows with length more than max_sequence_length (i.e. 11000) to obtain just acceptable length of input
  df_filtered = df[df['row_length'] <= max_sequence_length]

  # drop un needed columns
  df_filtered = df_filtered.drop(['row_length'], axis=1)

  # convert to dataset and select num_samples (i.e. 1000) record for now (considering memory resource)
  dataset = Dataset.from_pandas(df_filtered)

  if num_samples: 
    dataset = dataset.select(range(num_samples))
    
  return dataset
