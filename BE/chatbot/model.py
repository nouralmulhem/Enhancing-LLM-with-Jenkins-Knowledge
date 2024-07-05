import torch
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    pipeline,
    logging,
)
# Load model directly
from transformers import AutoTokenizer, AutoModelForCausalLM

print("is cuda: ", torch.cuda.is_available())

model_path = "Llama-2-7b-chat-finetune"

class chatbot:
  def __init__(self, instructions = ""):
    self.instructions = instructions
    self.pipe = self.load_pipeline()

  def load_pipeline(self):
    print('init starting')
    tokenizer = AutoTokenizer.from_pretrained(model_path)
    print('init starting3')
    model = AutoModelForCausalLM.from_pretrained(
        model_path,
        low_cpu_mem_usage=True,
        return_dict=True,
        torch_dtype=torch.float16, # float16 
        device_map={"": "cpu"}, # {"": 0}
    )
    print('init starting4')

    # Ignore warnings
    logging.set_verbosity(logging.CRITICAL)

    print('init starting 2')
    # Run text generation pipeline with our next model
    return pipeline(task="text-generation",
                    model=model,
                    tokenizer=tokenizer,
                    max_new_tokens=256,
                    # max_length=200
                    )

  def get_prompt(self, input, history):
    return f"""<s>[INST] <<SYS>>
        instructions: {self.instructions}
        <</SYS>>
        Current conversation:
        {history}
        Human: {input}
        AI: [/INST]"""

  def predict(self, input, history):
    print(self.get_prompt(input, history))
    # print(self.get_prompt(input))
    result = self.pipe(self.get_prompt(input, history))
    response = result[0]['generated_text'].split("[/INST]")[-1].strip()

    return response
  
#define chat
chat_instance = chatbot()
