# Read from the file file.txt and output the tenth line to stdout.
count=0
while read LINE; do
    count=$(($count + 1))
    if [[ $count == 10 ]]; then
        echo $LINE
        break
    fi
done < file.txt
if [[ $count != 10 ]]; then
    echo $LINE
fi

# Read from the file file.txt and output the tenth line to stdout.
awk 'FNR == 10' file.txt

# Read from the file file.txt and output the tenth line to stdout.
sed -n '10p' file.txt

# Read from the file file.txt and output the tenth line to stdout.
tail -n +10 file.txt | head -n 1